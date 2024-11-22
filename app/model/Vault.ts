import mongoose from "mongoose";

export interface VaultData extends mongoose.Document {
  outerTitle: string;
  outerContent: string;
  outerImageLink: string;
  outerPrice: number;
  innerTitle: string;
  innerContent: string;
  innerImageLink: string;
  walletAddress: string;
}

const vaultSchema = new mongoose.Schema<VaultData>({
  outerTitle: {
    type: String,
    required: true,
  },
  outerContent: {
    type: String,
    required: true,
  },
  outerImageLink: {
    type: String,
    required: true,
  },
  outerPrice: {
    type: Number,
    required: true,
  },
  innerTitle: {
    type: String,
    required: true,
  },
  innerContent: {
    type: String,
    required: true,
  },
  innerImageLink: {
    type: String,
    required: true,
  },
  walletAddress: {
    type: String,
    required: true,
  },
});

const Vault =
  mongoose.models.Vault || mongoose.model<VaultData>("Vault", vaultSchema);

export default Vault;
