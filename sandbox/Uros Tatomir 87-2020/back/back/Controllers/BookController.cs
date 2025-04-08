﻿using back.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace back.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookController : ControllerBase
    {
        private readonly DataContext _context;

        public BookController(DataContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<ActionResult<List<Book>>> AddBook(Book book)
        {
            _context.Books.Add(book);
            await _context.SaveChangesAsync();

            return Ok(await _context.Books.ToListAsync());
        }

        [HttpPut]
        public async Task<ActionResult<List<Book>>> UpdateBook(Book book)
        {
            var dbBook = await _context.Books.FindAsync(book.Id);
            if (dbBook == null)
                return BadRequest("Book not found");
            
            dbBook.Title = book.Title;
            dbBook.Description = book.Description; 

            await _context.SaveChangesAsync();
            return Ok(await _context.Books.ToListAsync());
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<Book>>> DeleteBook(int id)
        {
            var dbBook = await _context.Books.FindAsync(id);
            if (dbBook == null)
                return BadRequest("Book not found");
            _context.Books.Remove(dbBook);
            await _context.SaveChangesAsync();

            return Ok(await _context.Books.ToListAsync());
        }




        [HttpGet]
        public async Task<ActionResult<List<Book>>> GetAllBooks()
        {
            return Ok(await _context.Books.ToListAsync());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<List<Book>>> GetBooksId(int id)
        {
            var book = await _context.Books.FindAsync(id);
            if (book == null)
            {
                return BadRequest("Book not found");
            }
            return Ok(book);
        }
    }
}
