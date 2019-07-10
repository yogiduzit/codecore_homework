FactoryBot.define do
  factory :job_post do
    title {Faker::Job.title}
    description {Faker::Job.field}
    salary_min {rand(20_001..100_000)}
    salary_max {rand(100_001..300_000)}
  end
end
