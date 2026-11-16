html = html.replace(new RegExp("{{id}}", "g"), json.id);
// desing.haleKapali doluysa açık zeminde koyu ışıltı kalkar; boşsa eski görünüm aynen (2 Kas 2026)
if (json.desing && json.desing.haleKapali) html = html.replace('<div class="modulex-out">', '<div class="modulex-out modulex-halesiz">');
