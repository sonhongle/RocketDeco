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
<<<<<<< HEAD
  div.classList.add('products');
=======
    div.classList.add('products');
>>>>>>> 494f4fc63c74f7c63a84a62f0be88af3b74594cc
  });

  const buttonLinks = document.querySelectorAll('p em a');

<<<<<<< HEAD
  buttonLinks.forEach(buttonLink => {
  buttonLink.classList.add('button-secondary');
  });

const productElements = document.querySelectorAll(".products");

productElements.forEach(product => {
  const firstChild = document.createElement("div");
  firstChild.classList.add("psale");
  firstChild.textContent = "Bán chạy";

  const secondChild = document.createElement("div");
  secondChild.classList.add("sale-off");
  secondChild.textContent = "-23%";

  product.appendChild(firstChild);
  product.appendChild(secondChild);
});


=======
  buttonLinks.forEach((buttonLink) => {
    buttonLink.classList.add('button-secondary');
  });

>>>>>>> 494f4fc63c74f7c63a84a62f0be88af3b74594cc
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
