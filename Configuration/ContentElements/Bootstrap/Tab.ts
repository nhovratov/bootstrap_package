tt_content.bootstrap_package_tab = COA
tt_content.bootstrap_package_tab {
	10 =< lib.stdheader
	20 = FLUIDTEMPLATE
	20 {
		file = {$plugin.bootstrap_package_contentelements.view.templateRootPath}Bootstrap/Tab.html
		partialRootPath = {$plugin.bootstrap_package_contentelements.view.partialRootPath}
		layoutRootPath = {$plugin.bootstrap_package_contentelements.view.layoutRootPath}
	}
}