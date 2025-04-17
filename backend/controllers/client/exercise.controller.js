const Exercise = require("../../models/exercise.model");
const Video = require("../../models/video.model");
const Lesson = require("../../models/lesson.model");
const Course = require("../../models/course.model");
const paginationHelper = require("../../helpers/pagination");
const systemConfig = require("../../config/system");
const createTreeHelper = require("../../helpers/createTree");

const { spawn } = require('child_process');
const path = require('path')
const fs = require('fs')

// [GET] /exercise/detail/:ExerciseSlug
module.exports.detailItem = async (req, res) => {
  try {
    console.log(req.params.ExerciseSlug)
    const find = {
      ExerciseDeleted: 1,
      ExerciseSlug: req.params.ExerciseSlug,
    };

    const exer = await Exercise.findOne(find).lean();
    // console.log(exer)

    const lesson = await Lesson.findOne({
      _id: exer.LessonId,
      LessonDeleted: 1,
    });

    const course = await Course.findOne({
      _id: lesson.CourseId,
      CourseDeleted: 1,
      CourseStatus: 1
    }).lean();
    const count = await Lesson.countDocuments({
      CourseId: course._id,
      LessonDeleted: 1,
    });
    if (count > 0) {
      const lesson = await Lesson.find({
        CourseId: course._id,
        LessonDeleted: 1,
      }).lean();
      for (const item of lesson) {
        const video = await Video.find({
          LessonId: item._id,
          VideoDeleted: 1
        })
        if (video.length != 0) {
          item.video = video
        }

      }
      for (const item of lesson) {
        const exer = await Exercise.findOne({
          LessonId: item._id,
          ExerciseDeleted: 1
        })
        if (exer) {
          item.exercise = exer
        }

      }
      course.lesson = lesson;
      // console.log(lesson)
    }

    exer.course = course;

    // const count = await Lesson.countDocuments({
    //   CourseId: req.params.CourseID,
    // });
    // if (count > 0) {
    //   const lesson = await Lesson.find({
    //     CourseId: req.params.CourseID,
    //     LessonDeleted: 1,
    //   });
    //   course.lesson = lesson;
    // }

    res.json(exer)
    // res.render("admin/pages/exercise/detail", {
    //   pageTitle: exer.ExerciseName,
    //   exer: exer,
    // });
  } catch (error) {
    // req.flash("error", "Không tìm thấy sản phẩm!");
    // res.redirect(`${systemConfig.prefixAdmin}/courses`);
    console.log(error)
    res.json({
      code: 400,
      message: error
    })
  }
};

// [POST] /exercise/check/:ExerciseSlug
module.exports.check = async (req, res) => {
  console.log(req.body);
  const ExerciseSlug = req.params.ExerciseSlug;
  const code = req.body.code;
  const language = req.body.language;

  try {
    const exercise = await Exercise.findOne({ ExerciseSlug });
    if (!exercise) {
      return res.status(404).json({ code: 200, message: 'Assignment not found' });
    }

    const tempDir = path.join(__dirname, '../../temp');
    if (!fs.existsSync(tempDir)) {
      fs.mkdirSync(tempDir, { recursive: true });
    }

    const extMap = {
      python3: '.py',
      java: '.java',
      cpp: '.cpp',
      php: '.php',
      javascript: '.js'
    };

    // Đảm bảo rằng bạn đã nhận được ngôn ngữ và mã nguồn từ client
    const ext = extMap[language];
    if (!ext) return res.status(400).json({ message: 'Unsupported language' });

    // Phân tích mã nguồn Java để lấy tên lớp
    let className = 'studentCode'; // Giá trị mặc định
    if (language === 'java') {
      const classRegex = /public\s+class\s+([A-Za-z0-9_]+)/;
      const match = code.match(classRegex);
      if (match && match[1]) {
        className = match[1]; // Lấy tên lớp
      }
    }

    const fileName = className + ext; // Tạo tên file với tên lớp
    const filePath = path.join(tempDir, fileName);
    fs.writeFileSync(filePath, code); // Lưu mã nguồn vào file với tên lớp đúng
    console.log("filePath", filePath)
    console.log('✅ Wrote code to:', filePath);
    console.log('📄 Content:\n' + code);
    let testResults = [];
    let passedTests = 0;
    for (const testCase of exercise.ExerciseTestcase) {
      console.log("testCase")
      if (!testCase.Input || !testCase.Output) {
        return res.status(400).json({ message: 'Test case is missing input or expected values' });
      }
      try {
        const result = await runTestCase(filePath, testCase, language, className);
        console.log(result)
        if (result.passed) passedTests++;
        testResults.push(result);
      } catch (err) {
        testResults.push({ testCase, passed: false, error: err });
        console.log(err)
      }
    }

    res.json({
      code: 200,
      passedTests,
      totalTests: exercise.ExerciseTestcase.length,
      testResults
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

async function runTestCase(filePath, testCase, language, baseName) {
  const dir = path.dirname(filePath);
  let command, args;

  if (language === 'java') {
    const compile = spawn('javac', [filePath]);
    await new Promise((res, rej) => {
      compile.on('close', (code) => code === 0 ? res() : rej('Java compile error'));
    });

    // Kiểm tra file .class tồn tại
    const classPath = path.join(dir, baseName + '.class');
    if (!fs.existsSync(classPath)) {
      throw new Error(`Compiled class not found: ${classPath}`);
    }

    command = 'java';
    args = ['-cp', dir, baseName];
  } else if (language === 'cpp') {
    const outPath = path.join(dir, baseName + '.out');
    const compile = spawn('g++', [filePath, '-o', outPath]);
    await new Promise((res, rej) => {
      compile.on('close', (code) => code === 0 ? res() : rej('C++ compile error'));
    });
    command = outPath;
    args = [];
  } else if (language === 'python3') {
    command = 'python3';
    args = [filePath];
  } else if (language === 'php') {
    command = 'php';
    args = [filePath];
  } else if (language === 'javascript') {
    command = 'node';
    args = [filePath];
  } else {
    throw new Error('Unsupported language');
  }

  return new Promise((resolve, reject) => {
    const proc = spawn(command, args, {
      cwd: dir
    });

    let stdout = '';
    let stderr = '';

    const timeout = setTimeout(() => {
      proc.kill('SIGKILL');
      reject('Test case timed out');
    }, 5000);

    proc.stdin.write(testCase.Input + '\n');
    proc.stdin.end();

    proc.stdout.on('data', (data) => {
      stdout += data.toString();
      console.log("stdout data:", data.toString());
      fs.writeFileSync(path.join(dir, 'output.log'), stdout); // Debug log
    });

    proc.on('close', () => {
      clearTimeout(timeout);
      console.log('Raw stdout:', stdout);
      const result = stdout.replace(/\r?\n|\r/g, '').trim();
      const expected = testCase.Output.replace(/\r?\n|\r/g, '').trim();

      console.log('Processed result:', JSON.stringify(result));
      console.log('Processed expected:', JSON.stringify(expected));
      // Thêm kiểm tra stderr nếu có lỗi
      if (stderr) {
        console.log('Error output:', stderr);
      }
      resolve({
        testCase,
        result,
        passed: result === expected,
        stderr
      });
    });

    proc.on('error', (err) => {
      clearTimeout(timeout);
      reject(err.message);
    });
  });
}