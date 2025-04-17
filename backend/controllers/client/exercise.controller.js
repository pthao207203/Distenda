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
  const ExerciseSlug = req.params.ExerciseSlug;
  const code = req.body.code;
  const language = req.body.language; // Nhận ngôn ngữ từ client

  try {
    const exercise = await Exercise.findOne({ ExerciseSlug });
    if (!exercise) {
      return res.status(404).json({ code: 200, message: 'Assignment not found' });
    }

    const tempDir = path.join(__dirname, '../../temp');
    if (!fs.existsSync(tempDir)) {
      fs.mkdirSync(tempDir, { recursive: true });
    }

    // Tạo file phù hợp với từng ngôn ngữ
    const extMap = {
      python3: '.py',
      java: '.java',
      cpp: '.cpp',
      php: '.php',
      javascript: '.js'
    };
    const ext = extMap[language];
    if (!ext) return res.status(400).json({ message: 'Unsupported language' });

    const fileName = 'studentCode' + ext;
    const filePath = path.join(tempDir, fileName);
    fs.writeFileSync(filePath, code);

    let testResults = [];
    let passedTests = 0;
    for (const testCase of exercise.ExerciseTestcase) {
      if (!testCase.Input || !testCase.Output) {
        return res.status(400).json({ message: 'Test case is missing input or expected values' });
      }
      try {
        const result = await runTestCase(filePath, testCase, language);
        if (result.passed) passedTests++;
        testResults.push(result);
      } catch (err) {
        testResults.push({ testCase, passed: false, error: err });
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

async function runTestCase(filePath, testCase, language) {
  console.log('Running test case with input:', testCase.Input);
  console.log('Expected output:', testCase.Output);

  const ext = path.extname(filePath);
  const baseName = path.basename(filePath, ext);
  const dir = path.dirname(filePath);
  let command, args;

  if (language === 'java') {
    const compile = spawn('javac', [filePath]);
    await new Promise((res, rej) => {
      compile.on('close', (code) => code === 0 ? res() : rej('Java compile error'));
    });
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
    const proc = spawn(command, args);

    let stdout = '';
    let stderr = '';

    proc.stdin.write(testCase.Input + '\n');
    proc.stdin.end();

    proc.stdout.on('data', (data) => {
      stdout += data.toString();
    });

    proc.stderr.on('data', (data) => {
      stderr += data.toString();
    });

    proc.on('close', (code) => {
      const result = stdout.trim();
      const expected = testCase.Output.trim();
      const passed = result === expected;
      resolve({ testCase, result, passed, stderr });
    });

    proc.on('error', (err) => {
      reject(err.message);
    });
  });
}