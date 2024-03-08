import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        double thanMoion = 14/100;
        Scanner in =  new Scanner(System.in);

        System.out.print("Введите ваш земной вес : ");
        int weight = in.nextInt();

        System.out.println(weight * thanMoion);
    }
}