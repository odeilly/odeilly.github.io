document.addEventListener("DOMContentLoaded", () => {
	document.querySelectorAll('a[target="_blank"]').forEach((a) => {
		const rel = (a.getAttribute("rel") || "").split(/\s+/);
		if (!rel.includes("noreferrer")) rel.push("noreferrer");
		a.setAttribute("rel", rel.filter(Boolean).join(" "));
	});
});
