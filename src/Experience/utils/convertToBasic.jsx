import * as THREE from "three";

export function convertMaterialsToBasic(materials, alphaTestValue = 0){
    const newMaterials = {};

    Object.keys(materials).forEach((key) => {
        const oldMaterial = materials[key];

        if (oldMaterial instanceof THREE.MeshBasicMaterial){
            const newMaterial = new THREE.MeshBasicMaterial({
                map: oldMaterial.map,
                transparent: oldMaterial.transparent,
                alphatest: oldMaterial.transparent ? 0.1 : alphaTestValue,
            });
            newMaterials[key] = newMaterial;
        } else {
            newMaterials[key] = oldMaterial;
        }
    });

    return newMaterials;
}