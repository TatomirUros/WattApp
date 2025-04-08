using Microsoft.EntityFrameworkCore;
using List.API.Models;
using Task = List.API.Models.Task;

namespace List.API.Data
{
    public class TasksDbContex : DbContext
    {
        public TasksDbContex(DbContextOptions options) : base(options)
        {
        }   


        // Dbset
        public DbSet<Task> Tasks { get; set;}

        
    }
}
