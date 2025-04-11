// 切换目录显示/隐藏
function toggleSidebar() {
    const toc = document.getElementById("toc");
    const overlay = document.getElementById("toc-overlay");

    // 检查当前屏幕宽度
    if (window.innerWidth > 768) {
        // 大屏幕下，按钮切换目录显示/隐藏
        toc.classList.toggle("show");  // 切换目录的显示与隐藏
    } else {
        // 小屏幕下，按钮切换目录显示/隐藏，并显示/隐藏遮罩层
        toc.classList.toggle("show");
        overlay.classList.toggle("show");
    }
}


// DOM加载后执行
document.addEventListener("DOMContentLoaded", function () {
    const toc = document.getElementById("toc");
    const headings = document.querySelectorAll("h1, h2, h3");

    const tocList = document.createElement("ul");

    // 生成 TOC 结构
    headings.forEach(heading => {
        if (!heading.id) {
            heading.id = heading.textContent.trim().replace(/\s+/g, '-').toLowerCase();
        }

        const li = document.createElement("li");
        li.className = heading.tagName.toLowerCase();

        const a = document.createElement("a");
        a.href = `#${heading.id}`;
        a.textContent = heading.textContent;

        li.appendChild(a);
        tocList.appendChild(li);
    });

    toc.appendChild(tocList);
    /*添加一个占位*/
    const spacer = document.createElement("li");
    spacer.style.height = "50px";
    tocList.appendChild(spacer);
    // 滚动监听实现高亮
    const links = toc.querySelectorAll("a");

    window.addEventListener("scroll", () => {
        let current = null;
        const scrollPosition = window.scrollY + 100;

        headings.forEach((heading, i) => {
            if (heading.offsetTop <= scrollPosition) {
                current = links[i];
            }
        });

        links.forEach(link => link.classList.remove("active"));

        if (current) {
            current.classList.add("active");
            current.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "nearest"
            });
        }
    });

    // 点击遮罩层关闭目录
    const overlay = document.getElementById('toc-overlay');
    overlay.addEventListener('click', toggleSidebar);
});
