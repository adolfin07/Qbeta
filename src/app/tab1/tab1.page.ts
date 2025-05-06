import { Component, OnInit } from '@angular/core';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page implements OnInit {
  row1Products = [
    {
      section: 'populares1',
      image: 'https://minecraft.wiki/images/Raw_Rabbit_JE3_BE2.png?54089',
      name: 'Rabbit',
      description:
        'La carne de conejo en Minecraft se obtiene al cazar conejos y es uno de los alimentos menos comunes del juego. Puede comerse cruda, aunque es más beneficiosa al cocinarla, momento en el que se convierte en carne de conejo cocida. Aunque no restaura tanta hambre como otros alimentos, es útil para preparar estofado de conejo, uno de los platos más completos del juego.',
      presentations: [
        'https://minecraft.wiki/images/Raw_Rabbit_JE3_BE2.png?54089',
        'https://minecraft.wiki/images/thumb/Baby_Chicken_JE2_BE2.png/100px-Baby_Chicken_JE2_BE2.png?7f3dc',
        'https://minecraft.wiki/images/thumb/Chicken_JE2_BE2.png/150px-Chicken_JE2_BE2.png?30245',
      ],
    },
    {
      section: 'populares1',
      image: 'https://minecraft.wiki/images/Raw_Porkchop_JE3_BE3.png?f1c5f',
      name: 'Porkchop',
      description:
        'La chuleta de cerdo en Minecraft es un alimento que se obtiene al matar cerdos. Puede comerse cruda o cocinada en un horno para restaurar más hambre. La versión cocinada es una de las mejores fuentes de alimento en el juego.',
    },
    { image: 'assets/Products/products-row1/product1-r1.png', name: 'Sandía' },
    {
      section: 'populares1',
      image: 'https://minecraft.wiki/images/Raw_Mutton_JE3_BE2.png?ea808',
      name: 'Mutton',
      description:
        'La carne de cordero en Minecraft es un alimento que se obtiene al matar ovejas. Puede comerse cruda, aunque es más efectiva al cocinarse en un horno, fogata o ahumador. Al estar cocida, restaura una buena cantidad de hambre, convirtiéndola en una fuente de alimento útil cuando se crían ovejas por lana o en granjas de supervivencia.',
    },
    {
      section: 'populares1',
      image: 'https://minecraft.wiki/images/Raw_Chicken_JE3_BE3.png?549cd',
      name: 'Chicken',
      description:
        'La carne de pollo en Minecraft se obtiene al matar gallinas y es un alimento común y fácil de conseguir. Puede comerse cruda, aunque al hacerlo hay una pequeña probabilidad de intoxicarse. Cocinarla en un horno o fogata convierte el pollo crudo en pollo cocido, una opción segura y eficiente para recuperar hambre.',
    },
    {
      section: 'populares1',
      image: 'https://minecraft.wiki/images/Raw_Beef_JE4_BE3.png?f3d10',
      name: 'Beef',
      description:
        'La carne de vaca en Minecraft, conocida como filete crudo, se obtiene al matar vacas. Puede consumirse cruda, aunque al cocinarla se convierte en filete cocido, uno de los alimentos más nutritivos del juego. Es una fuente excelente de hambre y saturación, ideal para largos viajes o combates.',
    },
  ];

  row2Products = [
    {
      section: 'populares2',
      image: 'https://minecraft.wiki/images/Potato_JE3_BE2.png?27685',
      name: 'Potato',
      description:
        'La papa en Minecraft es un cultivo que los jugadores pueden plantar, cosechar y usar como alimento. Puede comerse cruda, aunque alimenta muy poco. Al cocinarla en un horno se convierte en papa horneada, una opción mucho más nutritiva y eficiente para recuperar hambre durante la exploración o la supervivencia.',
    },
    {
      image: 'https://minecraft.wiki/images/Melon_Slice_JE2_BE2.png?b8c6b',
      name: 'Melon',
      description:
        'El melón en Minecraft es un alimento que se obtiene al romper bloques de melón, los cuales se generan en junglas o se pueden cultivar desde semillas. Al recolectarlo, entrega rodajas de melón que pueden comerse para recuperar algo de hambre. Aunque no es muy nutritivo, es fácil de cultivar y útil como fuente constante de alimento.',
    },
    {
      image: 'https://minecraft.wiki/images/Apple_JE3_BE3.png?3853a',
      name: 'Apple',
      description:
        'La manzana en Minecraft es un alimento que se obtiene ocasionalmente al cortar hojas de roble. Aunque no es muy común, puede comerse cruda para recuperar algo de hambre o usarse para fabricar la valiosa manzana dorada, que otorga efectos especiales. Es útil tanto para la supervivencia como en combates o pociones.',
    },
    {
      image: 'https://minecraft.wiki/images/Carrot_JE3_BE2.png?5e9c8',
      name: 'Carrot',
      description:
        'La zanahoria en Minecraft es un alimento que se puede encontrar en aldeas o al recolectar cultivos. Se puede comer directamente sin necesidad de cocinarla y ofrece una buena cantidad de hambre. También sirve para criar cerdos, hacer zanahorias doradas y preparar pociones, lo que la convierte en un recurso versátil y valioso.',
    },
    {
      image: 'https://minecraft.wiki/images/Beetroot_JE2_BE2.png?649dc',
      name: 'Beetroot',
      description:
        'La remolacha en Minecraft es un cultivo que se puede encontrar en aldeas o cultivar a partir de semillas de remolacha. Puede comerse cruda, aunque su valor nutricional es bajo. También se puede usar para elaborar sopa de remolacha, una opción más efectiva para recuperar hambre.',
    },
  ];

  row3Products = [
    {
      section: 'populares3',
      image: 'https://minecraft.wiki/images/Cake_JE4.png?009f2',
      name: 'Cake',
      description:
        'El pastel en Minecraft es un alimento especial que se coloca como bloque y se consume por porciones. A diferencia de otros alimentos, no se puede comer directamente desde el inventario, sino que se debe colocar en el mundo. Cada pastel tiene siete porciones que restauran hambre al ser consumidas, lo que lo hace ideal para compartir o para dejar en una base como fuente de alimento decorativa y funcional.',
    },
    {
      image: 'https://minecraft.wiki/images/Cookie_JE2_BE2.png?a911c',
      name: 'Cookie',
      description:
        'La galleta en Minecraft es un alimento que se elabora combinando trigo y granos de cacao. Se consume directamente desde el inventario y, aunque solo restaura una pequeña cantidad de hambre por unidad, se produce en grandes cantidades, lo que la hace útil como comida rápida y accesible, especialmente en zonas con jungla donde el cacao es abundante.',
    },
    {
      image:
        'https://minecraft.wiki/images/thumb/Glow_Berries_JE1_BE1.png/150px-Glow_Berries_JE1_BE1.png?7c9cc',
      name: 'Glow Berries',
      description:
        'Las bayas brillosas en Minecraft son un alimento que crece en las cuevas frondosas, colgando de las enredaderas de bayas brillantes. Se pueden cosechar fácilmente y comer directamente, aunque solo restauran una pequeña cantidad de hambre. Además de servir como alimento, también iluminan ligeramente su entorno, lo que las hace útiles tanto para decorar como para orientarse en zonas oscuras.',
    },
    {
      image: 'https://minecraft.wiki/images/Dried_Kelp_JE1_BE2.png?441be',
      name: 'Kelp',
      description:
        'El kelp, o alga en Minecraft, es una planta acuática que crece en los océanos y se puede recolectar fácilmente nadando. Puede secarse en un horno para convertirse en alga seca, que sirve como alimento básico. Aunque no restaura mucha hambre, es muy abundante y fácil de cultivar, lo que la convierte en una opción eficiente para alimentar al jugador en grandes cantidades o para automatizar en granjas.',
    },
    {
      image:
        'https://minecraft.wiki/images/Pufferfish_%28item%29_JE5_BE2.png?c436f',
      name: 'Pufferfish',
      description:
        'El pez globo en Minecraft es un tipo de pez que se obtiene pescando o matando peces globo en los océanos. Aunque se puede comer, no es recomendable, ya que al hacerlo causa efectos negativos como veneno, náuseas y hambre. Su uso principal es en la elaboración de pociones de respiración acuática, lo que lo convierte en un recurso valioso para la exploración submarina más que en una fuente de alimento.',
    },
  ];

  selectedProduct: any = null;
  currentImage: string = '';

  constructor() {}

  ngOnInit() {}

  selectProduct(product: any) {
    if (product) {
      this.selectedProduct = product;
      this.currentImage = product.image;
    }
  }

  closeProduct() {
    this.selectedProduct = null;
    this.currentImage = '';
  }

  changeImage(index: number): void {
    const presentations = this.selectedProduct?.presentations;
    if (presentations && presentations.length > index) {
      this.currentImage = presentations[index];
    }
  }
}
