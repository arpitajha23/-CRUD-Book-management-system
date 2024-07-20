using bookCRUD.Models;
using Microsoft.EntityFrameworkCore;

using System.Data.Entity.Infrastructure;

namespace bookCRUD.Data
{
    public class BooksDbContext : DbContext
    {
        public BooksDbContext(DbContextOptions<BooksDbContext> options) : base(options)
        {
        }

        public DbSet<AddBook> AddBooks { get; set; }
    }
}
