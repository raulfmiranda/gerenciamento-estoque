import login from "./pages/login.js";
import branches from "./pages/branches.js";
import addBranch from "./pages/addBranch.js";
import categories from "./pages/categories.js";
import pagina01 from "./pages/pagina01.js";
import addCategory from "./pages/addCategory.js";

let pages = {
    'addBranch': addBranch,
    'login': login,
    'categories': categories,
    'pagina01': pagina01,
    'branches': branches,
    'addCategory': addCategory
};

document.querySelectorAll('[data-action="menu"]').forEach(
    (item) => {
        item.addEventListener('click', () => {
            // content.innerHTML = window[item.dataset.content]();
            content.innerHTML = pages[item.dataset.content]();
        });
    }
);

function alterarConteudo(nome) {
    content.innerHTML = window[nome]();
}