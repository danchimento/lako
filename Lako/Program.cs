using Lako.Properties;
using System;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Text;

namespace Lako
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("============= LAKO =============");
            Console.Write("Enter a name for your project: ");
            var projectName = Console.ReadLine();

            Directory.CreateDirectory(projectName);

            var resources = System.Reflection.Assembly.GetExecutingAssembly().GetManifestResourceNames();
            var packageResources = resources.Where(r => r.Contains("package"));

            foreach (var resource in packageResources)
            {
                System.Reflection.Assembly objAssembly = System.Reflection.Assembly.GetExecutingAssembly();
                var objStream = objAssembly.GetManifestResourceStream(resource);
                var abytResource = ReadFully(objStream);
                var fileName = GetFileNameFromResourceName(resource);

                // We want to drop the files in the project directory, not the sub-package directory
                fileName = fileName.Replace("package\\", string.Empty);
                var path = $@"{projectName}\{fileName}";

                // Create the directory path if it doesn't exist
                FileInfo file = new FileInfo(path);
                file.Directory.Create();

                File.WriteAllBytes(path, abytResource);
            }

            /// npm install
            var processStartInfo = new ProcessStartInfo();
            processStartInfo.WorkingDirectory = $@".\\{projectName}";
            processStartInfo.FileName = "cmd.exe";
          //  processStartInfo.Arguments = "/C npm install";
            Process proc = Process.Start(processStartInfo);
            proc.WaitForExit();


            /// Open the project directory
            ProcessStartInfo startInfo = new ProcessStartInfo
            {
                Arguments = $"{projectName}",
                FileName = "explorer.exe"
            };

            Process.Start(startInfo);
        }

        public static byte[] ReadFully(Stream input)
        {
            byte[] buffer = new byte[16 * 1024];
            using (MemoryStream ms = new MemoryStream())
            {
                int read;
                while ((read = input.Read(buffer, 0, buffer.Length)) > 0)
                {
                    ms.Write(buffer, 0, read);
                }
                return ms.ToArray();
            }
        }

        private static string GetFileNameFromResourceName(string resourceName)
        {
            // NOTE: this code assumes that all of the file names have exactly one
            // extension separator (i.e. "dot"/"period" character). I.e. all file names
            // do have an extension, and no file name has more than one extension.
            // Directory names may have periods in them, as the compiler will escape these
            // by putting an underscore character after them (a single character
            // after any contiguous sequence of dots). IMPORTANT: the escaping
            // is not very sophisticated; do not create folder names with leading
            // underscores, otherwise the dot separating that folder from the previous
            // one will appear to be just an escaped dot!

            StringBuilder sb = new StringBuilder();
            bool escapeDot = false, haveExtension = false;

            for (int i = resourceName.Length - 1; i >= 0; i--)
            {
                if (resourceName[i] == '_')
                {
                    escapeDot = true;
                    continue;
                }

                if (resourceName[i] == '.')
                {
                    if (!escapeDot)
                    {
                        if (haveExtension)
                        {
                            sb.Append('\\');
                            continue;
                        }
                        haveExtension = true;
                    }
                }
                else
                {
                    escapeDot = false;
                }

                sb.Append(resourceName[i]);
            }

            string fileName = Path.GetDirectoryName(sb.ToString());

            fileName = new string(fileName.Reverse().ToArray());

            return fileName;
        }
    }

}
