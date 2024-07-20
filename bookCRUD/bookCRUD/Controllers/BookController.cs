using bookCRUD.Data;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using bookCRUD.Models;

namespace bookCRUD.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookController : ControllerBase
    {
        
        private readonly BooksDbContext _context;


        public BookController(BooksDbContext context)
        {
            _context = context;
        }

        // GET: api/addbooks
        [HttpGet]
        public async Task<ActionResult> GetAddBooks()
        {
            var addBooks = await _context.AddBooks.ToListAsync();
            return Ok(addBooks);
        }

        // GET: api/addbooks/
        [HttpGet("{id}")]
        public async Task<ActionResult> GetAddBook(int id)
        {
            var addBook = await _context.AddBooks.FindAsync(id);

            if (addBook == null)
            {
                return NotFound();
            }

            return Ok(addBook);
        }

        // PUT: api/addbooks/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAddBook(int id, AddBook addBook)
        {
            if (id != addBook.Id)
            {
                return BadRequest("Mismatched IDs");
            }

            try
            {
                _context.Entry(addBook).State = EntityState.Modified;
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AddBookExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw; 
                }
            }

            return NoContent();
        }

        // POST: api/addbooks
        [HttpPost]
        public async Task<ActionResult> PostAddBook(AddBook addBook)
        {
            _context.AddBooks.Add(addBook);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetAddBook), new { id = addBook.Id }, addBook);
        }

        // DELETE: api/addbooks/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAddBook(int id)
        {
            var addBook = await _context.AddBooks.FindAsync(id);
            if (addBook == null)
            {
                return NotFound();
            }

            _context.AddBooks.Remove(addBook);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool AddBookExists(int id)
        {
            return _context.AddBooks.Any(e => e.Id == id);
        }

    }
}
