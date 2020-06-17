using System;

namespace Nstaircase
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Write("Input for N Triangle:");
            int max = Convert.ToInt32(Console.ReadLine());
            for(int i=0;i<max;i++){
            Console.Write(new String(' ', max-i));
            Console.Write(new String('#', i+1)+'\n');
            }
        }
    }
}
