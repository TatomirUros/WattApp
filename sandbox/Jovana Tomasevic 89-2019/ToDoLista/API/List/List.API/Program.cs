using List.API.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Inject Dbcontext

builder.Services.AddDbContext<TasksDbContex>(options =>
    options.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection")));


builder.Services.AddCors((setup)=>
{
    setup.AddPolicy("default", (options) =>
    {

        options.AllowAnyMethod().AllowAnyHeader().AllowAnyOrigin();

    });


}

);

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("default");
app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
