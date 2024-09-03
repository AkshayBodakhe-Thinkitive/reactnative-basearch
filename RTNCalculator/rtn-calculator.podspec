require "json"

package = JSON.parse(File.read(File.join(__dir__, "package.json")))

Pod::Spec.new do |s|
  s.name            = "rtn-calculator"
  s.version         = package["version"]
  s.summary         = package["description"]
  s.description     = package["description"]
  s.homepage        = package["homepage"]
  s.license         = package["license"]
  s.platforms       = { :ios => "11.0" }
  s.author          = package["author"]
  s.source          = { :git => package["repository"], :tag => "#{s.version}" }

  s.source_files    = "ios/**/*.{h,m,mm,swift}"

  install_modules_dependencies(s)
end

# require "json"

# package = JSON.parse(File.read(File.join(__dir__, "package.json")))

# Pod::Spec.new do |s|
#   s.name            = "rtn-calculator"
#   s.version         = package["version"]
#   s.summary         = package["description"]
#   s.description     = package["description"]
#   s.homepage        = package["homepage"]
#   s.license         = package["license"]
#   s.platforms       = { :ios => "11.0" }
#   s.author          = package["author"]
#   s.source          = { :git => package["repository"], :tag => "#{s.version}" }

#   s.source_files    = "ios/**/*.{h,m,mm,swift}", "generated/**/*.h"
#   s.public_header_files = "generated/**/*.h"

#   s.header_dir = "RTNCalculator"
#   s.header_mappings_dir = "generated"

#   install_modules_dependencies(s)
# end
