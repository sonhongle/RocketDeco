export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`columns-${cols.length}-cols`);

  const headings = document.querySelectorAll('.columns > div > div > h2');
  headings.forEach((heading) => {
    heading.classList.add('columns-heading');
  });

  const paragraphs = document.querySelectorAll('.columns > div > div > p');
  paragraphs.forEach((paragraph) => {
    paragraph.classList.add('columns-paragraph');
  });

  const divs = document.querySelectorAll('.columns > div > div');
  divs.forEach((div) => {
    div.classList.add('products');
  });

  const buttonLinks = document.querySelectorAll('p em a');

  buttonLinks.forEach((buttonLink) => {
    buttonLink.classList.add('button-secondary');
  });

  // setup image columns
  [...block.children].forEach((row) => {
    [...row.children].forEach((col) => {
      const pic = col.querySelector('picture');
      if (pic) {
        const picWrapper = pic.closest('div');
        if (picWrapper && picWrapper.children.length === 1) {
          // picture is only content in column
          picWrapper.classList.add('columns-img-col');
        }
      }
    });
  });
}
