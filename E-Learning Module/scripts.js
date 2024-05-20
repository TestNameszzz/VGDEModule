function popup(windowname, width, height, href) {
	var popup = document.getElementById(windowname);
	popup.style.display = "block";
	popup.style.width = width + "px";
	popup.style.height = height + "px";

	// Add event listener for escape key
	document.addEventListener('keydown', function(event){
		if(event.key === "Escape"){
			popup.style.display = "none";
		}
	});
}

function closePopup(windowname) {
	var popup = document.getElementById(windowname);
	popup.style.display = "none";
}

const scrollableText = document.getElementById("scrollableText");
const scrollmarquee = () => {
  let marqueeWidth = scrollableText.offsetWidth;
  let containerWidth = scrollableContainer.offsetWidth;
  let scrollAmount = (marqueeWidth - containerWidth) * 0.2;
  scrollableText.scrollLeft += scrollAmount;
  if (scrollableText.scrollLeft > marqueeWidth - containerWidth) {
    scrollableText.scrollLeft = 0;
  }
};
setInterval(scrollmarquee, 25);

document.addEventListener("DOMContentLoaded", function() {
  const tabs = document.querySelectorAll(".tab");
  const tabContents = document.querySelectorAll(".tab-content");

  tabs.forEach(function(tab) {
    tab.addEventListener("click", function() {
      const tabId = this.getAttribute("data-tab-id");
      tabs.forEach(function(tab) {
        tab.classList.remove("active");
      });
      this.classList.add("active");

      tabContents.forEach(function(tabContent) {
        tabContent.classList.remove("active");
      });
      document.getElementById(tabId + "-content").classList.add("active");
    });
  });

  const tabContainer = document.getElementById("tabContainer");
  tabContainer.style.overflowX = "scroll";
  tabContainer.style.whiteSpace = "nowrap";
});

const tabs = document.querySelectorAll('.tab');
tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tabs.forEach((otherTab) => {
      otherTab.classList.remove('active');
    });
    tab.classList.add('active');
  });
});