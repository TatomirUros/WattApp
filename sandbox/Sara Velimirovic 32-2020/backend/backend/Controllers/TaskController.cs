using backend.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TaskController : ControllerBase
    {
        private readonly DataContext _context;
        public TaskController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Tasks>>> GetTasks()
        {
            return Ok(await _context.Taskss.ToListAsync());
        }

        [HttpPost]
        public async Task<ActionResult<List<Tasks>>> CreateTask(Tasks task)
        {
            _context.Taskss.Add(task);
            await _context.SaveChangesAsync();

            return Ok(await _context.Taskss.ToListAsync());
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<Tasks>>> DeleteTask(int id)
        {
            var dbTask = await _context.Taskss.FindAsync(id);
            if(dbTask == null)
            {
                return BadRequest("Hero not found.");
            }

            _context.Taskss.Remove(dbTask);
            await _context.SaveChangesAsync();

            return Ok(await _context.Taskss.ToListAsync());
        }
    }
}
