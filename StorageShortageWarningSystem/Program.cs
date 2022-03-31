using System;
using System.IO;

namespace StorageShortageWarningSystem
{
    class Program
    {
        static void Main(string[] args)
        {
            DriveInfo[] allDrives = DriveInfo.GetDrives();

            foreach (DriveInfo d in allDrives) 
            {
                if (d.DriveType.Equals(DriveType.Fixed))
                {
                    Console.WriteLine(d.Name);
                    Console.WriteLine(d.TotalSize);
                    Console.WriteLine(d.AvailableFreeSpace);
                }


            }
        }
    }
}
