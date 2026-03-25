export class MyException extends Error {

}

export function callMe(name) {
  if (name === "Fahmi") {
    throw new MyException("Nama tidak boleh Fahmi");
  } else {
    return "OK"
  }
}