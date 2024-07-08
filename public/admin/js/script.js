// Button Status
const listButtonStatus = document.querySelectorAll("[button-status");
if(listButtonStatus.length > 0) {
    let url = new URL(window.location.href);

    listButtonStatus.forEach(button => {
        button.addEventListener("click", () => {
            const status = button.getAttribute("button-status");
            url.searchParams.set("status", status);
            window.location.href = url.href;
        });
    });

    // Thêm class active mặc định
    const statusCurrent = url.searchParams.get("status") || "";
    const buttonCurrent = document.querySelector(`[button-status="${statusCurrent}"]`);
    if(buttonCurrent) {
        buttonCurrent.classList.add("active");
    }
}
// End Button Status
