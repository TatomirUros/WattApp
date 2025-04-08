using System.ComponentModel.DataAnnotations;


namespace List.API.Models
{
    
    public class Task
    {
        [Key]
        public Guid TaskId { get;  set; }

        public string  TaskName { get; set; }

        public string TaskDescription { get; set; }

        public int ExpiryDate { get; set; }

    }
}
