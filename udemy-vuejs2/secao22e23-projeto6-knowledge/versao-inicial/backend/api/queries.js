module.exports = {
  categoryWithChilden: `
    WITH RECURSIVE subCategories (id) AS (
      SELECT id FROM categories WHERE id = ?
      UNION ALL
      SELECT c.id FROM subcategories, categories c
        WHERE "parentId" = subCategories.id
    )
    SELECT id FROM subcategories
  `
};
