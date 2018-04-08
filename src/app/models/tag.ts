export interface Tag {
    id: number;
    name: string;
    parentId: number;

}

export interface TagForest {
    roots: Tag[];
}