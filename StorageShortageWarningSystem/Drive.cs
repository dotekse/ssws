using System;
namespace StorageShortageWarningSystem
{
    public class Drive
    {
        public string MachineName { get; set; }
        public string Name { get; set; }
        public long TotalSize { get; set; }
        public long AvailableFreeSpace { get; set; }
        
    }
}
