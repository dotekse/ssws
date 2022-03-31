using System;
using System.Collections.Generic;
using System.IO;
using System.Text.Json;

namespace StorageShortageWarningSystem
{
    class Program
    {
        static void Main(string[] args)
        {
            List<Drive> _drives = new List<Drive>();
            DriveInfo[] allDrives = DriveInfo.GetDrives();


            foreach (DriveInfo d in allDrives) 
            {
                if (d.DriveType.Equals(DriveType.Fixed))
                {
                    _drives.Add(new Drive()
                    {
                        Name = d.Name,
                        TotalSize = d.TotalSize,
                        AvailableFreeSpace = d.AvailableFreeSpace
                    });
                }
            }
            string json = JsonSerializer.Serialize(_drives);
            File.WriteAllText("./drives.json", json);

        }
    }
}
