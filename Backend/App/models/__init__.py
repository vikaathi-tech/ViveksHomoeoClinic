import pkgutil
import importlib
import sys

package_name = "Backend.App.models"  # full package path
package = sys.modules[package_name]

for loader, module_name, is_pkg in pkgutil.iter_modules(package.__path__):
    importlib.import_module(f"{package_name}.{module_name}")