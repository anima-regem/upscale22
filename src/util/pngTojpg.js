export const convertPngtoJpg = (str) => {
    let splits = str.split("/")
    let name = splits[2].split(".")
    return name[0] + ".jpg"
  }