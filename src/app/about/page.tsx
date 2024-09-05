import { TextUnderlined } from "@/components/text-underlined";

import { GeneralStructureDiagram } from "./structure-diagram";

export default function AboutPage() {
	return (
		<article className="prose mx-auto py-12 px-6">
			<TextUnderlined>
				<h1>Кои сме ние?</h1>
			</TextUnderlined>
			<p>
				Сојузот на Средношколци е единственото ексклузивно тело за претставување на средношколците на национално ниво.
			</p>

			<TextUnderlined variant="secondary">
				<h2>Нашата Мисија</h2>
			</TextUnderlined>
			<p>
				Нашата главна цел е овозможување подобро образование за сите средношколци во Република Македонија. Ова подразбира претставување на средношколците пред сите институции и органи кои создаваат политики за образованието, како и претставување на средношколците пред сите други засегнати страни.
			</p>
			<p>
				Истовремено ние нудиме простор сите средношколци слободно да се изразат и нивните мислења да бидат чуени.
			</p>

			<TextUnderlined variant="secondary">
				<h2>Нашата Структура</h2>
			</TextUnderlined>
			<p>
				Во извршувањето на нашите цели, Сојузот на Средношколци е организиран во неколку главни делови:
			</p>

			<div className="h-64 sm:h-96 w-full">
				<GeneralStructureDiagram />
			</div>

		</article>
	);
}