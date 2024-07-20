using System.ComponentModel.DataAnnotations;

namespace bookCRUD.Models
{
    public class AddBook
    {
        [Key]
        public int Id { get; set; }

        [Required(ErrorMessage = "Title is required.")]
        [StringLength(30, ErrorMessage = "Title can't be longer than 30 characters.")]
        public string Title { get; set; } = string.Empty;

        [Required(ErrorMessage = "Description is required.")]
        [StringLength(100, ErrorMessage = "Description can't be longer than 100 characters.")]
        public string Description { get; set; } = string.Empty;

        [Required(ErrorMessage = "Author is required.")]
        [StringLength(30, ErrorMessage = "Author can't be longer than 30 characters.")]
        public string Author { get; set; } = string.Empty;

        [Required(ErrorMessage = "Brand is required.")]
        [StringLength(30, ErrorMessage = "Brand can't be longer than 30 characters.")]
        public string Brand { get; set; } = string.Empty;

      

    }
}
