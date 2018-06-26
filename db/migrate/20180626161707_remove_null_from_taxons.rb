class RemoveNullFromTaxons < ActiveRecord::Migration[5.2]
  def change
    change_column :spree_taxons, :name ,:string, :null => true
  end
end
