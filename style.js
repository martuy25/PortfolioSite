document.addEventListener('DOMContentLoaded', function () {
    const tables = document.querySelectorAll('.tableSchool');
  
    tables.forEach(table => {
      table.addEventListener('mouseenter', function () {
        document.body.style.cursor = 'pointer';
      });
  
      table.addEventListener('mouseleave', function () {
        document.body.style.cursor = 'auto';
      });
    });
  });

  