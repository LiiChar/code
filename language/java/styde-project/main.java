import java.util.Scanner;

class Console {
    static void log(char ch){
        System.out.println(ch);
    }
    static void log(String str){
        System.out.println(str);
    }
    static void log(int num){
        System.out.println(num);
    }
    static void log(String[] args){
        for (int i = 0; i < args.length; i++) {
            System.out.print(args[i]);
        }
    }
    static void log(int[] args){
        for (int i = 0; i < args.length; i++) {
            System.out.print(args[i]);
        }
    }
}

class Queue {
    private char q[];
    private int putloc, getloc;
    public int length = 0;

    Queue (int length) {
        q = new char[length];
        putloc = getloc = 0;
    }

    void put (char ch) {
        if (q.length == putloc) {
            Console.log("Очередь заполнена - ");
            return;
        }

        length++;
        q[putloc++] = ch;
    }

    char get () {
        if (getloc == putloc) {
            Console.log("Очередь пуста");
            return (char) 0;
        }

        return q[getloc++];
    }
}

class QuickSort {
    static void qsort (char[] items) {
        qs(items, 0, items.length - 1);
    } 

    private static void qs (char[] items, int left, int right) {
        int i, j;
        char x, y;

        i = left; j = right;
        x = items[(left + right)/2];

        do {
            while ((items[i] < x) && (i < right)) i++;
            while ((x < items[j]) && (j > left)) j--;
            System.out.print(i + " " + j + "  ");
            if (i <= j) {
                y = items[i];
                items[i] = items[j];
                items[j] = y;
                i++; y--;
            }
        } while (i <= j);

        if (left < j) qs(items, left, j);
        if (i < right) qs(items, i, right);
    }
}

class main {
    public static void main(String[] args) {
        char[] arr = {'c', 'a', 'q', 'x', 'g', 'i'};
        
        QuickSort.qsort(arr);

        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i]);
        }

    }
}
