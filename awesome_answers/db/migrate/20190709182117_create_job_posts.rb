class CreateJobPosts < ActiveRecord::Migration[5.2]
  def change
    create_table :job_posts do |t|

      t.string :title
      t.text :description
      t.string :location
      t.integer :salary_max
      t.integer :salary_min
      t.timestamps

    end
  end
end
