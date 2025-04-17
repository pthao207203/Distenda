import java.util.Scanner;

public class SumCalculator {
    public static void main(String[] args) {
        // Tạo đối tượng Scanner để nhập giá trị từ bàn phím
        Scanner scanner = new Scanner(System.in);

        // Nhập giá trị của a và b từ người dùng
        int a = scanner.nextInt();
        int b = scanner.nextInt();

        // Tính tổng của a và b
        int total = a + b;

        // In kết quả
        System.out.println(total);
        
        // Đóng Scanner
        scanner.close();
    }
}
