import java.util.Scanner;

public class Encode {

    public static void main(String[] args) {
        try {
            Scanner in = new Scanner(System.in);

            System.out.print("Введите сообщение которое хочешь зашифровать: ");
            String msg = in.nextLine();

            String encmsg = "";
            String decmsg = "";

            System.out.print("Введите ключ: ");
            int key = in.nextInt();

            for (int i = 0; i < msg.length(); i++) {
                encmsg = encmsg + (char) (msg.charAt(i) ^ key);
            }

            System.out.println(encmsg);

            for (int i = 0; i < encmsg.length(); i++) {
                decmsg = decmsg + (char) (encmsg.charAt(i) ^ key);
            }

            System.out.println(decmsg);

        } catch (Exception e) {
            // TODO: handle exception
        }
    }
}
