 
import dbConnect from "../lib/dbConnect";
import Vault from "../model/Vault";

export async function getData(id:  string) {
  await dbConnect();
  const data = Vault.findOne({ _id: id });
  return data;
}
