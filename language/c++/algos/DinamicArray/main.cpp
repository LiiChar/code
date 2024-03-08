#include <iostream>
#include <string>

class DynamicArray
{
public:
    int *arr;
    int length;
    int capacity;

    DynamicArray(int capacity)
    {
        arr = new int[capacity];
        capacity = capacity;
    }

    int get(int i)
    {
        return arr[i];
    }

    void insert(int i, int n)
    {
        arr[i] = n;
    }

    void pushback(int n)
    {
        if (length == capacity)
        {
            resize();
        }
        arr[length] = n;
        length++;
    }

    int popback()
    {
        if (length > 0)
        {
            // soft delete the last element
            length--;
        }
        return arr[length];
    }

    void resize()
    {
        capacity = capacity * 2;
        int *ptrq = new int[capacity];
        for (int i = 0; i < length; i++)
        {
            ptrq[i] = arr[i];
        }
        delete[] arr;
        arr = ptrq;
    }

    int getSize()
    {
        return length;
    }

    int getCapacity()
    {
        return capacity;
    }
};

int main()
{
    DynamicArray arr = DynamicArray(20);

    return 0;
}