document.addEventListener("DOMContentLoaded", function() {
    const sidebarContainer = document.getElementById("sidebar-container");
    
    if (sidebarContainer) {
        sidebarContainer.innerHTML = `
            <div class="side-bar">
                <h3>General</h3>
                <ul>
                    <li><a href="index.html">Home</a></li> 
                    <li><a href="aboutme.html">About Me</a></li>    
                    <li><a href="aboutmentor.html">About Mentor</a></li>
                    <li><a href="aboutproject.html">About Project</a></li>
                </ul>

                <h3>Weekly log</h3>
                <ul>
                    <li><a href="week-1.html">Week 1</a></li>
                    <li><a href="week-2.html">Week 2</a></li>
                    <li><a href="week-3.html">Week 3</a></li>
                    <li><a href="week-4.html">Week 4</a></li>
                    <li><a href="week-5.html">Week 5</a></li>
                    <li><a href="week-6.html">Week 6</a></li>
                    <li><a href="week-7.html">Week 7</a></li>
                    <li><a href="week-8.html">Week 8</a></li>
                    <li><a href="week-9.html">Week 8</a></li>
                </ul>
            </div>
        `;
    }
});