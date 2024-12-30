import { Static, Type } from "@sinclair/typebox";

export const permitGenerationConfigurationType = Type.Object({
    automaticTransfersMode: T.Boolean({ default: false, description: "Enable or disable automatic transfers mode" }),
});

export type PermitGenerationConfiguration = Static<typeof permitGenerationConfigurationType>;
