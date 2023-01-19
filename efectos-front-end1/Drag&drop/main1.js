function handleDragStart(e) {
    this.style.opacity = '0.4';
  }
  
  function handleDragEnd(e) {
    this.style.opacity = '1';
  }
  
  let items = document.querySelectorAll('.container .box');
  items.forEach(function (item) {
    item.addEventListener('dragstart', handleDragStart);
    item.addEventListener('dragend', handleDragEnd);
  });

  document.addEventListener('DOMContentLoaded', (event) => {

    function handleDragStart(e) {
      this.style.opacity = '0.4';
    }
  
    function handleDragEnd(e) {
      this.style.opacity = '1';
  
      items.forEach(function (item) {
        item.classList.remove('over');
      });
    }
  
    function handleDragOver(e) {
      e.preventDefault();
      return false;
    }
  
    function handleDragEnter(e) {
      this.classList.add('over');
    }
  
    function handleDragLeave(e) {
      this.classList.remove('over');
    }
  
    let items = document.querySelectorAll('.container .box');
    items.forEach(function(item) {
      item.addEventListener('dragstart', handleDragStart);
      item.addEventListener('dragover', handleDragOver);
      item.addEventListener('dragenter', handleDragEnter);
      item.addEventListener('dragleave', handleDragLeave);
      item.addEventListener('dragend', handleDragEnd);
      item.addEventListener('drop', handleDrop);
    });
  });

  function handleDrop(e) {
    e.stopPropagation(); // stops the browser from redirecting.
    return false;
  }
  
  function handleDragStart(e) {
    this.style.opacity = '0.4';
  
    dragSrcEl = this;
  
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
  }

  function handleDrop(e) {
    e.stopPropagation();
  
    if (dragSrcEl !== this) {
      dragSrcEl.innerHTML = this.innerHTML;
      this.innerHTML = e.dataTransfer.getData('text/html');
    }
  
    return false;
  }