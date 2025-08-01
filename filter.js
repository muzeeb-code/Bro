document.addEventListener("DOMContentLoaded", function () {
  document.querySelector('.apply-filters').addEventListener('click', function () {
    const searchText = document.querySelector('.filter-sidebar input').value.toLowerCase();
    const location = document.querySelectorAll('.filter-sidebar select')[0].value.toLowerCase();
    const type = document.querySelectorAll('.filter-sidebar select')[1].value.toLowerCase();
    const department = document.querySelectorAll('.filter-sidebar select')[2].value.toLowerCase();

    const jobCards = document.querySelectorAll('.job-card');

    jobCards.forEach(card => {
      const title = card.querySelector('h3').textContent.toLowerCase();
      const details = card.querySelector('p').textContent.toLowerCase();
      const description = card.querySelectorAll('p')[1].textContent.toLowerCase();

      const matchesSearch = searchText === '' || title.includes(searchText);
      const matchesLocation = location === 'select location' || details.includes(location);
      const matchesType = type === 'select type' || details.includes(type);
      const matchesDept = department === 'select department' || description.includes(department);

      if (matchesSearch && matchesLocation && matchesType && matchesDept) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});
