using System;

namespace _8staircase
{
    class Program
    {
        static void Main(string[] args)
        {
            int max = 8;
            for(int i=0;i<max;i++){
            Console.Write(new String(' ', max-i));
            Console.Write(new String('#', i+1)+'\n');
            }
        }
    }
}
