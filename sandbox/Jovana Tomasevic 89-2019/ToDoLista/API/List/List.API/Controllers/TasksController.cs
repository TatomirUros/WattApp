using List.API.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Task = List.API.Models.Task;
namespace List.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TasksController : Controller
    {
        private readonly TasksDbContex tasksDbContext;
        public TasksController(TasksDbContex tasksDbContext)
        {
            this.tasksDbContext=tasksDbContext;
        }
       
        
        
        //Get All Tasks
        [HttpGet]
        public async Task<IActionResult> GetAllTasks()
        {
         var tasks = await tasksDbContext.Tasks.ToListAsync();
         return Ok(tasks);
        }



        //Get Single Task
        [HttpGet]
        [Route("{id:guid}")]//samo da prihvata guid jer smo stavili takav tip
        [ActionName("GetTask")]
        public async Task<IActionResult> GetTask([FromRoute]Guid id )
        {
            var task = await tasksDbContext.Tasks.FirstOrDefaultAsync(x => x.TaskId == id);
            if (task != null) { return Ok(task); }
            return NotFound("Nije pronadjen takav zadatak");
           
        }

        // Add task
        [HttpPost]
        public async Task<IActionResult> AddCard([FromBody] Task task)
        {   
           task.TaskId = Guid.NewGuid();
           await tasksDbContext.Tasks.AddAsync(task);//dodas u bazu
            await tasksDbContext.SaveChangesAsync();
            return CreatedAtAction(nameof(GetTask), new { id = task.TaskId},task );
        }

        // Update a task
        [HttpPut]
        [Route("{id:guid}")]//samo da prihvata guid jer smo stavili takav tip
        public async Task<IActionResult> UpdateTask([FromRoute] Guid id, [FromBody] Task task)
        {
            var Existingtask = await tasksDbContext.Tasks.FirstOrDefaultAsync(x => x.TaskId == id);
            if (Existingtask != null)
            {
                Existingtask.TaskName = task.TaskName;
                Existingtask.TaskDescription = task.TaskDescription;
                Existingtask.ExpiryDate = task.ExpiryDate;
                await tasksDbContext.SaveChangesAsync();
                return Ok(Existingtask);
            }
            else return NotFound("Zadatak nije pronadjen");

        }


        // Delete a task
        [HttpDelete]
        [Route("{id:guid}")]//samo da prihvata guid jer smo stavili takav tip
        public async Task<IActionResult> DeleteTask([FromRoute] Guid id)
        {
            var Existingtask = await tasksDbContext.Tasks.FirstOrDefaultAsync(x => x.TaskId == id);
            if (Existingtask != null)
            {
                tasksDbContext.Remove(Existingtask);
                await tasksDbContext.SaveChangesAsync();
                return Ok(Existingtask);
            }
            else return NotFound("Zadatak nije pronadjen");

        }



    }
}
