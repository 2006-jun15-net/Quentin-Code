using System;

namespace CollatzSequence
{
    class Program
    {
        static int collatz(int i){
            if(i%2==0)
            {
                return i/2;
            }
            else return i*3+1;
        }
        static void Main(string[] args)
        {
{
            Console.Write("Input for Collatz Triangle:");
            int seed = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine(seed);
            while(seed != 1)
            {
                seed = collatz(seed);
                Console.WriteLine(seed);
            }
        }
        }
    }
}
