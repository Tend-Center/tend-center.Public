window.onload = () => {
  document.documentElement.classList.add('loaded');
  document.getElementById('cal').onclick = () => alert('Three dates. Pick one. You’re in.');

  const icons = [
    "beef.png","hatchet.png","fire.png","shoes.png","fish.png","wood.png",
    "cross.png","teepee.png","trinity.png","bow.png","guitar.png","buck.png"
  ];

  const slots = [document.getElementById('i1'), document.getElementById('i2'),
                 document.getElementById('i3'), document.getElementById('i4')];

  let pos = 0;

  setInterval(() => {
    pos = (pos + 1) % icons.length;
    const i = pos % 4;
    slots[i].style.opacity = '0';
    setTimeout(() => {
      slots[i].src = icons[(pos + i) % icons.length];
      slots[i].style.opacity = '0.29';
    }, 450);
  }, 2400);
};