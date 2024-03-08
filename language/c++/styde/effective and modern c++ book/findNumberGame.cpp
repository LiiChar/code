#include <iostream>

using namespace std;

int main()
{
    bool x = true;
    int y = rand();

    cout << "Find number \n";
    while (x)
    {
        int g;
        cout << "Input number: ";
        cin >> g;

        if (g == y)
        {
            cout << "You find it" << endl;
            break;
        }
        if (g > y)
        {
            cout << "You lose, number less " << endl;
            continue;
        }
        if (g < y)
        {
            cout << "You lose, number more " << endl;
            continue;
        }
    }

    return 0;
}