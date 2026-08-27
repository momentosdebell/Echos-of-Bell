const year = dv.page("Settings").Year;
const birth = dv.current().Birth;
const death = dv.current().Death;

let status;
let age = "";

if (birth > year) {
    status = "⚫ Not born";
}
else if (death && death < year) {
    status = "🔴 Dead";
    age = ` | Died at ${death - birth} y/o | ${year - death} years ago`;
}
else {
    status = "🟢 Alive";
    age = ` | Age: ${year - birth} y/o`;
}

dv.span(`[[Settings|${status}]]${age}`);